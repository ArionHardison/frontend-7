<template>
  <aside id="aside" class="widget-area">
    <template v-if="program!==null">
      <div class="text-center">
        <template v-if="program.author.profile_picture">
          <Avatar :src="program.author.profile_picture" width="50" height="50"/>
        </template>
        <div class="col-12 mt-2 mb-2">
          <b class="mt-2 mb-2">{{program.author.full_name}}</b><br/>
          {{program.author.roles.toString()}}
        </div>
      </div>
      <template v-if="accessToken">
        <template v-if="program.access_type === 1">
          <h3>Free</h3>
          <button
            class="
                  btn btn-primary border-0 transform-scale-h mb-3 btn-block mt-3
                  "
            type="button"
            :disabled="program.borken"
            @click="startProgram"
          >
            Start Program
          </button>
        </template>
        <template v-else>
          <template v-if="program.sale">
            <h3>
              ${{ program.sale.amount / 100 }}
              <small>USD</small>
            </h3>
          </template>
          <button
            :disabled="program.borken"
            class="
                  btn btn-primary border-0 transform-scale-h mb-3 btn-block mt-3
                  "
            type="button"
            @click="startProgram"
          >
            Buy Program
          </button>
        </template>
      </template>
      <template v-else>
        You should have account to start program
        <nuxt-link to="/auth/login" class="btn btn-primary border-0 transform-scale-h mb-3 btn-block mt-3">Sign In</nuxt-link>
      </template>
    </template>
    <div class="widget widget_search">
      <SearchForm />
    </div>
    <Categories />
    <TagCloud />
  </aside>
</template>
<script>
import SearchForm from '~/components/Forms/SearchForm';
import Categories from '~/components/blocks/sidebar/Categories';
import RecentEntries from '~/components/blocks/sidebar/RecentEntries';
import RecentComments from '~/components/blocks/sidebar/RecentComments';
import TagCloud from '~/components/blocks/sidebar/TagCloud';
import Avatar from "~/components/ui/Avatar.vue";
import api from "~/mixins/api";
export default {
  name: 'Sidebar',
  mixins: [api],
  props: {
    program: {
      type: Object,
      default: () =>{
        return null;
      }
    }
  },
  computed: {
    accessToken(){
      return this.$store.state.authData.accessToken;
    }
  },
  methods: {
    async startProgram() {
      const program = await this.post(`program-sale/buy`, {
        program_id: this.program.id,
      });
      if (program) {
        if (this.program.access_type === 1) {
          await this.$router.push({name: "account"});
        } else {
          if (process.client) {
            window.location.href = program.url;
          }
        }
      }
    },
  },
  components: {
    SearchForm,
    Categories,
    RecentEntries,
    RecentComments,
    TagCloud,
    Avatar
  }
}
</script>
