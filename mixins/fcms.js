import api from "@/mixins/api";
export default {
    mixins: [api],
    methods: {
        async getContainers(containersList){
            const containers = await this.get(`public/get-containers/${containersList}`)
            let sortedContainers = {};
            if(containers) {
                for (let container of containers) {
                    let call = "";
                    if(container.hasOwnProperty("container_call")){
                        call = container.container_call;
                    }else{
                        call = container[container.length-1].container_call;
                    }
                    sortedContainers[call] = container;
                }
            }
            return sortedContainers;
        },
        async getEntities(entitiesList){
            const entities = await this.get(`public/get-entities/${entitiesList}`)
            let sortedEntities = {};
            if(entities) {
                for (let entity of entities) {
                    sortedEntities[entity.entity_call] = entity;
                }
            }
            return sortedEntities;

        }
    }
};
