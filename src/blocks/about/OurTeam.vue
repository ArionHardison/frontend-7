<template>
    <div id="our-team" class="block spacer p-top-xl">
        <div class="title">
            <h2 class="hr text-uppercase">Our Team</h2>
        </div>

        <div class="row gutter-width-sm with-pb-md">
            <div v-for="member in teamMembers" :key="member.id" class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div class="team-member">
                    <div class="img object-fit">
                        <div class="object-fit-cover">
                            <img :src="member.imgSrc" :alt="member.name">
                        </div>
                    </div>

                    <div class="team-member-content">
                        <div class="team-member-position">
                            <p>{{ member.position }}</p>
                        </div>

                        <h4 class="team-member-t-head">{{ member.name }}</h4>

                        <div class="team-member-description">
                            <p>{{ member.description }}</p>
                        </div>
                    </div>

                    <nav class="team-member-nav-items">
                        <ul class="nav">
                            <li class="nav-item">
                                <a title="Facebook" :href="member.facebook"><i class="fab fa-facebook-f"></i></a>
                            </li>

                            <li class="nav-item">
                                <a title="LinkedIn" :href="member.linkedIn"><i class="fab fa-linkedin-in"></i></a>
                            </li>

                            <li class="nav-item">
                                <a title="Instagram" :href="member.instagram"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TeamData from '../../data/about/teamData.json';

    export default {
        name: 'OurTeam',
        data() {
            return {
                teamMembers: TeamData.teamData
            }
        }
    }
</script>
