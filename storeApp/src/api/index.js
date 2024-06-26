import axios from 'axios'

const get = async (url) => {

  return new Promise(async (resolve, reject) => {

    setTimeout(async () => {
      try {
        const response = await axios.get(url)
        console.log("axios", response.data);
        resolve(response.data)
      } catch (err) {
        console.log(err);
        reject(err)
      }

    }, 2000);

  })
}

const getCars = () => get("http://localhost:3000/api/cars")

export {
  getCars,
}