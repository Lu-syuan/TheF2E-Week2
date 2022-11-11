<template>
  <div id="SignName">
    <!-- 側邊簽名攔 -->
    <div class="info">
      <div class="container">
        <div class="file">
          <p>文件名稱</p>
          <!-- 放pdj.name -->
          <div class="Name">
            <p>PdfName</p>
            <div class="edit">
              <img src="../assets/image/edit.png" alt="" />
            </div>
          </div>
        </div>
        <div class="MySign">
          <p>我的簽名 (直接拖曳使用)</p>
          <!-- 使用v-for 顯示自己的簽名-->
          <ul>
            <li></li>
          </ul>

          <ul class="create">
            <li>
              <p>創建簽名</p>
              <div class="icon pen"></div>
            </li>
            <li>
              <p>上傳圖片</p>
              <div class="icon pic"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 側邊簽名攔 end-->
    <!-- 顯示pdf -->
    <div class="showPdf"></div>

    <!-- 顯示pdf end-->

    <!-- Canvas -->
    <div id="canvas-bg">
      <div class="container">
        <p>在框格內簽下大名</p>
        <canvas
          id="canvas"
          ref="canvas"
          width="780"
          height="360"
          style="border: 1px dashed #a5a39c"
          @mousedown="startPosition"
          @touchstart="startPosition"
          @mouseup="finishedPosition"
          @touchend="finishedPosition"
          @mouseleave="finishedPosition"
          @touchcancel="finishedPosition"
          @mousemove="draw"
          @touchmove="draw"
        ></canvas>
        <div class="btn-group">
          <ul>
            <li @click="reset" class="clear">清除</li>
            <li class="color-option">
              <!-- :class="`color-${color.name} ` + isColorActive(color.name)" -->
              <span
                v-for="(color, index) in colors"
                class="color"
                :style="`background-color:${color.code};`"
                :key="index"
                @click="currentColor = color.code"
              ></span>
            </li>
          </ul>
          <ul>
            <li class="btn cancel">取消</li>
            <li class="btn enter">簽好了</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: null,
      canvasContext: null,
      colors: [
        { name: 'black', code: 'black' },
        { name: 'blue', code: '#0038A6' },
        { name: 'lightgreen', code: '#51A8BC' }
      ],
      isPainting: false,
      currentColor: null,
      img: []
    }
  },
  mounted () {
    this.currentColor = this.colors[0]
    this.setCanvas()
  },
  methods: {
    setCanvas () {
      this.canvas = this.$refs.canvas
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      ctx.lineWidth = 4
      ctx.lineCap = 'round'
      ctx.strokeStyle = this.currentColor.code
      // ctx.lineJoin = 'round'
      this.canvasContext = ctx
    },
    // 取得滑鼠 / 手指在畫布上的位置
    getPaintPosition (e) {
      const canvasSize = this.canvas.getBoundingClientRect()

      if (e.type === 'mousemove') {
        return {
          x: e.clientX - canvasSize.left,
          y: e.clientY - canvasSize.top
        }
      } else {
        return {
          x: e.touches[0].clientX - canvasSize.left,
          y: e.touches[0].clientY - canvasSize.top
        }
      }
    },

    // 開始繪圖時，將狀態開啟
    startPosition (e) {
      e.preventDefault()
      this.isPainting = true
      this.canvasContext.strokeStyle = this.currentColor
    },

    // 結束繪圖時，將狀態關閉，並產生新路徑
    finishedPosition () {
      this.isPainting = false
      this.canvasContext.beginPath()
    },
    test () {
      console.log('leave')
    },

    // 繪圖過程
    draw (e) {
      // 滑鼠移動過程中，若非繪圖狀態，則跳出
      if (!this.isPainting) return

      // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
      const paintPosition = this.getPaintPosition(e)

      // 移動滑鼠位置並產生圖案
      this.canvasContext.lineTo(paintPosition.x, paintPosition.y)
      this.canvasContext.stroke()
    },

    // 重新設定畫布
    reset () {
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/cssreset.css';

#SignName {
  display: flex;
  width: 100%;
  height: calc(100vh - 60px - 100px);
  background: $mid-grey;
  > .info {
    flex-basis: 23%;
    background-color: $white;
    @extend %HeadLine4;
    @extend %fontFamily;
    color: $dark-grey;
    > .container {
      > .file {
        padding: 25px 36px;
        border-bottom: 1px solid $mid-grey;
        > p {
          font-weight: 700;
        }
        > .Name {
          width: 100%;
          display: flex;
          padding-top: 15px;
          > p {
            flex-grow: 1;
          }
          > .edit {
            width: 20px;
            height: 20px;
          }
        }
      }
      > .MySign {
        text-align: center;
        padding-top: 25px;

        > p {
          font-weight: 700;
        }
        > .create {
          width: 100%;
          > li {
            display: block;
            width: 328px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px dashed $dark-grey;
            margin: 0 auto;
            margin-top: 15px;
            cursor: pointer;

            // line-height: 60px;
            > .icon {
              width: 22px;
              height: 22px;
              margin-left: 10px;
              vertical-align: middle;
            }
            > .icon.pen {
              background-image: url('../assets/image/pen.png');
            }
            > .icon.pic {
              background-image: url('../assets/image/pic.png');
              background-size: 100% 100%;
            }
          }
        }
      }
    }
  }
  > .showPdf {
    width: 100%;
    // background: red;
  }
}

#canvas-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  > .container {
    padding: 0 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    width: 830px;
    height: 550px;
    background: $white;
    border-radius: 35px;
    > p {
      padding: 30px 0;
      @extend %HeadLine3;
      @extend %fontFamily;
      color: $dark-grey;
    }
    > #canvas {
      margin: 0 auto;
    }
    > .btn-group {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > ul {
        cursor: pointer;
        display: flex;
        > li.clear {
          @extend %HeadLine3;
          @extend %fontFamily;
          color: $secondary;
        }
        > li.color-option {
          > .color {
            display: inline-block;
            width: 29px;
            height: 29px;
            border-radius: 50%;
            border: 3px solid $white;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-left: 30px;
          }
        }
        > .btn {
          width: 180px;
          height: 60px;
          border-radius: 35px;
          @extend %HeadLine3;
          @extend %fontFamily;
        }
        > li.cancel {
          color: $secondary;
          background: $light-main;
          line-height: 60px;
        }
        > li.enter {
          color: $white;
          background: $secondary;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
