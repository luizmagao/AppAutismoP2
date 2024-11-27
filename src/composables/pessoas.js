import useApi from "@/composables/useApi";

const showAll = async() => {
  try {
    return await useApi.getInstance("pessoas").showAll();
  } catch(e) {
    console.log(e);
  }
}

export { showAll }
