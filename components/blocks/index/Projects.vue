<template>
    <div id="projects" class="block">
        <div class="projects-items clearfix type-1">
            <router-link v-for="item in items" :key="item.id" :title="item.title"  class="projects-item" :to="item.link">
                <div class="projects-item-content">
                    <div class="projects-item-content-sec">
                        <div class="projects-item-date">
                            <p>{{ new Date().getFullYear() }}</p>
                        </div>

                        <div class="projects-item-description">
                            <h3 class="projects-item-title">{{ item.title }}</h3>
                        </div>
                    </div>
                </div>

                <div class="img object-fit">
                    <div class="object-fit-cover">
                        <img :src="item.imgSrc" :alt="item.title">
                    </div>
                </div>

                <div class="img-bg-color"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ProjectsData from '~/data/index/projectsData.json';

    export default {
        name: 'Projects',
        data() {
            return {
                items: ProjectsData.projectsData
            }
        },
    }
</script>
