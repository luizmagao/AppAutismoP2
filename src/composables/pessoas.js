import useApi from "@/composables/useApi";

const showAll = async() => {
  try {
    return await useApi.getInstance("pessoas").showAll();
  } catch (e) {
    console.log(e)
  }
}

const remove = async(docs) => {
  try {
    return await useApi.getInstance('pessoas').delete(docs)
  } catch (error) {
    console.log(error)
  }
}
const show = (id) => {}
const update = async(data) => {
  try {
    return await useApi.getInstance("pessoas").update(data);
  } catch (e) {
    console.log(e)
  }
}

const create = async(data) => {
  try {
    return await useApi.getInstance("pessoas").add(data);
  } catch (e) {
    console.log(e)
  }
}

export { showAll, remove, show, update, create }
