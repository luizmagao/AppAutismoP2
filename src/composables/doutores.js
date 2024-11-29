import useApi from "@/composables/useApi";

const showAll = async() => {
  try {
    return await useApi.getInstance("doutores").showAll();
  } catch (e) {
    console.log(e)
  }
}
