import supabase from "@/composables/supabase";

class useApi {

  table

  constructor(table) {
    this.table = table
  }

  static getInstance(table) {
    return new useApi(table);
  }

  async showAll() {
    try {
      const { data, error } = await supabase.from(this.table).select();
      if(!error) {
        return data;
      }
      return error;
    } catch (e) {
      console.log(e);
    }
  }

}

export default useApi;
