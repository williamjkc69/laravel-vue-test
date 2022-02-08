<template>
  <div>
    <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div class="flex flex-col justify-start h-full mt-10">
        <!-- Table -->
        <div
          class="
            w-full
            max-w-2xl
            mx-auto
            bg-white
            shadow-lg
            rounded-sm
            border border-gray-200
          "
        >
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Subjects</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead
                  class="
                    text-xs
                    font-semibold
                    uppercase
                    text-gray-400
                    bg-gray-50
                  "
                >
                  <tr>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">ID</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Name</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Created At</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  <tr v-for="(subject, index) in subjects" :key="index">
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="font-medium text-gray-800">
                          {{ subject.id }}
                        </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="font-medium text-gray-800">
                          {{ subject.name }}
                        </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">{{ subject.created_at }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from "../store/store";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      name: null,
    };
  },
  computed: {
    ...mapGetters({ subjects: "getUserSubjects" }),
  },
  created() {
    this.getSubjects();
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    getSubjects() {
      this.$store.dispatch("getSubjects");
    },
  },
  beforeRouteEnter(to, from, next) {
    if (!store.state.isAuth) {
      window.location.href = "/";
    }
    next();
  },
};
</script>