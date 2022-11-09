<template>
  <div id="Upload">
    <div class="container">
      <div class="option">
        <div
          class="NewFile"
          :class="{ isclick: OpenNew }"
          @click="change('New')"
        >
          上傳新文件
        </div>
        <div
          class="OldFile"
          :class="{ isclick: OpenOld }"
          @click="change('Old')"
        >
          選擇已上傳文件
        </div>
      </div>
      <div class="content-NewFile" v-if="OpenNew">
        <div class="container">
          <div class="text">
            <p>點擊此處上傳 或 直接拖曳檔案</p>
            <div class="icon">
              <img src="../assets/image/icon-pdf.png" alt="" />
            </div>
            <p>(限10MB以下PDF檔)</p>
          </div>
        </div>
      </div>
      <div class="content-OldFile" v-if="OpenOld">
        <div class="container">
          <div class="form">
            <div class="search-box">
              <input type="text" placeholder="搜尋文件名稱" />
              <div class="search-icon">
                <img src="../assets/image/search.png" alt="" />
              </div>
            </div>
            <div class="title">
              <p>名稱</p>
              <p>上傳時間</p>
              <p>上次開啟</p>
            </div>
            <ol v-for="item in PdfFile" :key="item.id">
              <li>{{ item.PdfName }}</li>
              <li>{{ item.time }}</li>
              <li>{{ item.OpenTime }}</li>
            </ol>
          </div>

          <div class="container-icon">
            <p>or</p>
            <p>登入查看更多歷史文件</p>
            <div class="icon">
              <div class="icon-fb">
                <img src="../assets/image/fb.png" alt="" />
              </div>
              <div class="icon-ig">
                <img src="../assets/image/ig.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      OpenNew: false,
      OpenOld: true,
      PdfFile: [
        {
          id: 0,
          PdfName: '六角學院2022版活動切結書.pdf',
          time: '2022/10/31, 23:45',
          OpenTime: '--'
        },
        {
          id: 1,
          PdfName: '廠商合約.pdf',
          time: '2022/10/31, 18:01',
          OpenTime: '2022/10/31, 18:05'
        }
      ]
    }
  },
  methods: {
    change (now) {
      if (now === 'New' && this.OpenNew === true) {
        return ''
      } else if (now === 'Old' && this.OpenOld === true) {
        return ''
      } else {
        this.OpenNew = !this.OpenNew
        this.OpenOld = !this.OpenOld
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/cssreset.css';

#Upload {
  overflow-y: scroll;
  //扣掉nav & footer height
  height: calc(100vh - 60px - 100px);
  background: $mid-grey;
  padding: 30px 0;
  > .container {
    margin: 0 auto;
    max-width: calc(100% - 30px);
    width: 1440px;
    height: 100%;
    background-color: $light-main;
    border-radius: 35px;

    > .option {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      > .NewFile,
      .OldFile {
        @extend %fontFamily;
        @extend %HeadLine3;
        flex-basis: 50%;
        height: 60px;
        line-height: 60px;
        border-radius: 35px 35px 0 0;
        color: $secondary;
        cursor: pointer;
      }
      > .NewFile.isclick,
      .OldFile.isclick {
        background-color: $white;
        color: $primary;
        box-shadow: 8px -4px 4px rgba(238, 237, 232, 0.5);
      }
    }
    > .content-NewFile,
    .content-OldFile {
      height: calc(100% - 60px);
      width: 100%;
      background: $white;
      padding: 50px;
      border-radius: 0 0 35px 35px;
    }
    > .content-NewFile {
      > .container {
        border: 1px dashed $dark-grey;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 35px;
        > .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          text-align: center;
          > p {
            color: $dark-grey;
            @extend %HeadLine2;
          }
          > .icon {
            width: 144px;
            height: 144px;
            margin: 40px auto;
          }
        }
      }
      > .container:hover {
        background: $light-main;
      }
    }
    > .content-OldFile {
      color: $dark-grey;
      @extend %fontFamily;

      > .container {
        height: 100%;

        > .form {
          height: 70%;
          > .search-box {
            position: relative;
            > input {
              width: 100%;
              height: 60px;
              border: 1px solid #a5a39c;
              border-radius: 30px;
              padding: 18px 30px;
              @extend %HeadLine2;
            }
            > .search-icon {
              height: 30px;
              width: 30px;
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(-50%, -50%);
            }
          }
          > .title,
          ol {
            height: 60px;
            width: 100%;
            display: flex;
            padding: 0px 30px;
          }
          > .title {
            > p {
              @extend %HeadLine4;
              line-height: 60px;
            }
            > p:nth-child(1) {
              flex-basis: 50%;
            }
            > p:nth-child(2) {
              flex-basis: 25%;
            }
            > p:nth-child(3) {
              flex-basis: 25%;
            }
          }

          > ol {
            border-radius: 30px;
            > li {
              @extend %HeadLine3;
              line-height: 60px;
            }

            > li:nth-child(1) {
              flex-basis: 50%;
            }
            > li:nth-child(2) {
              flex-basis: 25%;
            }
            > li:nth-child(3) {
              flex-basis: 25%;
            }
          }
          > ol:nth-child(3) {
            background: $light-main;
          }
        }

        > .container-icon {
          width: 100%;
          text-align: center;
          > p:nth-child(1) {
            @extend %fontFamily;
            @extend %HeadLine4;
            position: relative;
          }
          > p:nth-child(1)::before {
            content: '';
            height: 1px;
            width: 48%;
            background-color: $dark-grey;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
          > p:nth-child(1)::after {
            content: '';
            height: 1px;
            width: 48%;
            background-color: $dark-grey;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
          > p:nth-child(2) {
            @extend %fontFamily;
            @extend %HeadLine3;
            margin: 25px 0 40px;
          }
          > .icon {
            display: flex;
            justify-content: center;
            align-content: center;
            gap: 85px;
            .icon-fb,
            .icon-ig {
              width: 86.25px;
              height: 86.25px;
            }
          }
        }
      }
    }
  }
}
</style>
