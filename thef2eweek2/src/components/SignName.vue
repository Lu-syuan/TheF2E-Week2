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
  </div>
</template>

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
</style>
