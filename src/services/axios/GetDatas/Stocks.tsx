import api from '../api';

const Stocks = async (data: string) => {
  try {
    const response = await api.get(data, {validateStatus: () => true})

    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

export default Stocks;