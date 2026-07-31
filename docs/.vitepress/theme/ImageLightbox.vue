<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const isOpen = ref(false)
const imageSrc = ref('')
const imageAlt = ref('')
const scale = ref(1)
const offsetX = ref(0)
const offsetY = ref(0)
const rotation = ref(0)
const dragging = ref(false)
const closeButton = ref<HTMLButtonElement>()

const pointers = new Map<number, { x: number; y: number }>()
let dragStart = { x: 0, y: 0, offsetX: 0, offsetY: 0 }
let pinchStartDistance = 0
let pinchStartScale = 1
let moved = false
let previousBodyOverflow = ''

const imageTransform = computed(() => ({
  transform: `translate3d(${offsetX.value}px, ${offsetY.value}px, 0) scale(${scale.value}) rotate(${rotation.value}deg)`
}))
const zoomLabel = computed(() => `${Math.round(scale.value * 100)}%`)

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function resetView() {
  scale.value = 1
  offsetX.value = 0
  offsetY.value = 0
  rotation.value = 0
}

function openImage(img: HTMLImageElement) {
  imageSrc.value = img.currentSrc || img.src
  imageAlt.value = img.alt || '教程图片'
  resetView()
  isOpen.value = true
  nextTick(() => closeButton.value?.focus())
}

function close() {
  isOpen.value = false
  pointers.clear()
  dragging.value = false
}

function onDocumentDoubleClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  const img = target?.closest?.('.vp-doc img') as HTMLImageElement | null
  if (!img || img.closest('.image-lightbox')) return
  event.preventDefault()
  openImage(img)
}

function onDocumentPointerOver(event: PointerEvent) {
  const target = event.target as HTMLElement | null
  const img = target?.closest?.('.vp-doc img') as HTMLImageElement | null
  if (img && !img.title) img.title = '双击查看大图'
}

function zoomAt(factor: number, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2) {
  const oldScale = scale.value
  const nextScale = clamp(oldScale * factor, 0.5, 5.5)
  if (nextScale === oldScale) return

  const pointX = (clientX - window.innerWidth / 2 - offsetX.value) / oldScale
  const pointY = (clientY - window.innerHeight / 2 - offsetY.value) / oldScale
  offsetX.value = clientX - window.innerWidth / 2 - pointX * nextScale
  offsetY.value = clientY - window.innerHeight / 2 - pointY * nextScale
  scale.value = nextScale
}

function onWheel(event: WheelEvent) {
  const factor = Math.exp(-event.deltaY * 0.0015)
  zoomAt(factor, event.clientX, event.clientY)
}

function toggleZoom(event?: MouseEvent) {
  if (scale.value > 1.05) resetView()
  else zoomAt(2, event?.clientX, event?.clientY)
}

function pointerDistance() {
  const values = [...pointers.values()]
  if (values.length < 2) return 0
  return Math.hypot(values[0].x - values[1].x, values[0].y - values[1].y)
}

function onPointerDown(event: PointerEvent) {
  if (event.button !== 0 && event.pointerType === 'mouse') return
  const target = event.currentTarget as HTMLElement
  target.setPointerCapture(event.pointerId)
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
  moved = false

  if (pointers.size === 1) {
    dragging.value = true
    dragStart = { x: event.clientX, y: event.clientY, offsetX: offsetX.value, offsetY: offsetY.value }
  } else if (pointers.size === 2) {
    dragging.value = false
    pinchStartDistance = pointerDistance()
    pinchStartScale = scale.value
  }
}

function onPointerMove(event: PointerEvent) {
  if (!pointers.has(event.pointerId)) return
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })

  if (pointers.size >= 2 && pinchStartDistance > 0) {
    const next = clamp(pinchStartScale * (pointerDistance() / pinchStartDistance), 0.5, 5.5)
    if (Math.abs(next - scale.value) > 0.002) moved = true
    scale.value = next
    return
  }

  if (dragging.value) {
    const dx = event.clientX - dragStart.x
    const dy = event.clientY - dragStart.y
    if (Math.abs(dx) + Math.abs(dy) > 3) moved = true
    offsetX.value = dragStart.offsetX + dx
    offsetY.value = dragStart.offsetY + dy
  }
}

function onPointerUp(event: PointerEvent) {
  pointers.delete(event.pointerId)
  if (pointers.size === 0) {
    dragging.value = false
  } else if (pointers.size === 1) {
    const [point] = pointers.values()
    dragging.value = true
    dragStart = { x: point.x, y: point.y, offsetX: offsetX.value, offsetY: offsetY.value }
  }
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget && !moved) close()
}

function rotate(delta: number) {
  rotation.value = (rotation.value + delta) % 360
}

function openOriginal() {
  const tab = window.open(imageSrc.value, '_blank')
  if (tab) tab.opener = null
}

function onKeyDown(event: KeyboardEvent) {
  if (!isOpen.value) return
  if (event.key === 'Escape') close()
  else if (event.key === '+' || event.key === '=') zoomAt(1.2)
  else if (event.key === '-') zoomAt(1 / 1.2)
  else if (event.key === '0') resetView()
  else if (event.key.toLowerCase() === 'r') rotate(90)
  else return
  event.preventDefault()
}

watch(isOpen, (open) => {
  if (open) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousBodyOverflow
  }
})

onMounted(() => {
  document.addEventListener('dblclick', onDocumentDoubleClick)
  document.addEventListener('pointerover', onDocumentPointerOver)
  window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('dblclick', onDocumentDoubleClick)
  document.removeEventListener('pointerover', onDocumentPointerOver)
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = previousBodyOverflow
})
</script>

<template>
  <Transition name="lightbox-fade">
    <div
      v-if="isOpen"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`查看图片：${imageAlt}`"
      @wheel.prevent="onWheel"
      @click="onBackdropClick"
    >
      <div
        class="image-lightbox-stage"
        :class="{ dragging }"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @dblclick.stop="toggleZoom"
      >
        <img
          class="image-lightbox-picture"
          :src="imageSrc"
          :alt="imageAlt"
          :style="imageTransform"
          draggable="false"
        />
      </div>

      <div class="image-lightbox-toolbar" role="toolbar" aria-label="图片查看工具">
        <button type="button" title="缩小（-）" aria-label="缩小" @click.stop="zoomAt(1 / 1.2)">−</button>
        <button type="button" class="zoom-value" title="重置大小（0）" aria-label="重置图片大小" @click.stop="resetView">{{ zoomLabel }}</button>
        <button type="button" title="放大（+）" aria-label="放大" @click.stop="zoomAt(1.2)">＋</button>
        <span class="toolbar-separator"></span>
        <button type="button" title="向左旋转" aria-label="向左旋转" @click.stop="rotate(-90)">↶</button>
        <button type="button" title="向右旋转（R）" aria-label="向右旋转" @click.stop="rotate(90)">↷</button>
        <button type="button" title="打开原图" aria-label="在新标签页打开原图" @click.stop="openOriginal">↗</button>
        <span class="toolbar-separator"></span>
        <button ref="closeButton" type="button" class="close-button" title="关闭（Esc）" aria-label="关闭图片" @click.stop="close">×</button>
      </div>

      <div class="image-lightbox-footer">
        <span v-if="imageAlt">{{ imageAlt }}</span>
        <small>滚轮缩放 · 拖拽移动 · 双击切换 · Esc 关闭</small>
      </div>
    </div>
  </Transition>
</template>
