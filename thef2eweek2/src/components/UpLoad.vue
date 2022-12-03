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
            <p>
              <label for="file-upload">
                <input
                  @change="fileUpload"
                  id="file-upload"
                  type="file"
                  accept="application/pdf"
                  style="display: none"
                />
                點擊此處<span>上傳</span> 或 直接拖曳檔案
              </label>
            </p>
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
            <ol v-for="(item, index) in PdfFile" :key="index">
              <li>{{ item.name }}</li>
              <li>{{ item.uploadTime }}</li>
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
      pdfFileTest: [],
      OpenNew: true,
      OpenOld: false,
      PdfFile: []
    }
  },
  mounted () {
    const storageFile = localStorage.getItem('files')
    if (storageFile != null) {
      this.PdfFile = JSON.parse(storageFile)
    }
  },
  computed: {
    test () {
      return this.$store.state.pdfFile
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
    },

    fileUpload (e) {
      console.log(e.target.files[0])

      // 判斷檔案大小如果大於>10MB禁止上傳
      const file = e.target.files[0]
      if (Math.ceil(file.size / 1024 / 1024) > 10) {
        return window.alert('檔案大小超過10MB')
      } else {
        this.pushList(e.target.files)
      }
    },
    pushList (files) {
      const today = new Date()
      const uploadTime = `${today.getFullYear()}/${today.getMonth()}/${today.getUTCDate()},${today.getHours()}:${today.getMinutes()}`
      console.log(uploadTime)
      const self = this

      if (files.length === 1) {
        console.log('ok')
        // 將pdf轉為Base64格式
        const file = files[0]
        this.toBase64(file).then(function (base64) {
          // console.log(base64)
          const obj = {}
          obj.name = file.name
          obj.uploadTime = uploadTime
          obj.OpenTime = '---'
          obj.base64 = base64
          console.log(obj)
          self.PdfFile.push(obj)
        })
      }

      setTimeout(() => {
        localStorage.setItem('files', JSON.stringify(self.PdfFile))
      }, 1000)
    },
    async toBase64 (file, success = true) {
      return new Promise((resolve, reject) => {
        if (success) {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function () {
            resolve(reader.result)
          }
          reader.onerror = function (error) {
            console.log('Error', error)
          }
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('失敗')
        }
      })
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
      > .NewFile.isclick {
        background-color: $white;
        color: $primary;
        box-shadow: 8px -4px 4px rgba(238, 237, 232, 0.5);
      }
      > .OldFile.isclick {
        background-color: $white;
        color: $primary;
        box-shadow: -8px -4px 4px rgba(238, 237, 232, 0.5);
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
            > label {
              > span {
                cursor: pointer;
                text-decoration: underline;
                color: purple;
              }
            }
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
