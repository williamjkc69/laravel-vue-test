export default function evaluatePromise(action) {
  return new Promise((resolve, reject) => {
    action
      .then(({ data }) => {
        if (!data.success) {
          return reject(data.message)
        }

        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
