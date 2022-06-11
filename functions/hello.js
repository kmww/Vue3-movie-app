exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "kmw",
      age: 234,
      email: "abcdef@naver.com"
    })
  }
}