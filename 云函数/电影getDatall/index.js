// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入request-promise用于做网络请求
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  let url = `https://movie.douban.com/j/subject_abstract?subject_id=${event.movieid}`;
  return await rp(url)
    .then(function (res) {
      console.log(res)
      return res
    })
    .catch(function (err) {
      console.log(err)
    });
}