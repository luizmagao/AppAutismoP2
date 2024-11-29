import supabase from "@/composables/supabase";


class useApi {

  table

  constructor(table) {
    this.table = table
  }

  static getInstance(table) {
    return new this(table);
  }

  async showAll() {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .select();
      if(!error) {
        return data;
      }
      return new Error(error);
    } catch (e) {
      console.log(e)
    }
  }

  async update(docs) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .update(docs)
        .eq('id', docs.id)
        .select()
      if(!error) {
        return data;
      }
      return new Error(error);
    } catch (e) {
      console.log(e)
    }
  }

  async delete(docs) {
    try {
      await supabase
        .from(this.table)
        .delete()
        .eq('id', docs.id)
    } catch (e) {
      console.log(e)
    }
  }

  async add(docs) {
    try {
      const { data, error } = await supabase
        .from(this.table)
        .insert(docs)
        .select()
      if(!error) {
        return data;
      }
      return new Error(error);
    } catch (e) {
      console.log(e)
    }
  }

}

export default useApi;

