<template>


  <v-row>

    <v-col cols="12" lg="2" md="6" sm="12" align="center" class="p-6 backcol">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/logo.jpg" width="70%" />

      <v-expansion-panel-header class="text-start "
        style="font-size:18px; color:black"><v-icon>mdi-home-analytics</v-icon>Dashboard</v-expansion-panel-header>
      <v-expansion-panel-header class="text-start"
        style="font-size:18px; color:black"><v-icon>mdi-home-analytics</v-icon>Education</v-expansion-panel-header>

      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header
            style="background-color:#FBF7F4;font-size:18px; color:black"><v-icon>mdi-book-multiple</v-icon>Resources</v-expansion-panel-header>
          <v-expansion-panel-content style="background-color:#FBF7F4;font-size:18px; color:black">

            <v-expansion-panel-header class="text-start" style="font-size:15px; color:black">
              <p style="background-color:#E6C2C5;padding:7px;margin: 0px;margin-right: 6px;"></p>Genitic 101
            </v-expansion-panel-header>

            <v-expansion-panel-header class="text-start" style="font-size:15px; color:black">
              <p style="background-color:#FABE93;padding:7px;margin: 0px; margin-right: 6px;"></p>DNA Synthasis
            </v-expansion-panel-header>

            <v-expansion-panel-header class="text-start" style="font-size:15px; color:black">
              <p style="background-color:#445B88;padding:7px;margin-right: 6px; "></p>Events
            </v-expansion-panel-header>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panel-header class="text-start"
        style="font-size:18px; color:black"><v-icon>mdi-cog-transfer-outline</v-icon>Settings</v-expansion-panel-header>


      <div class="logout ">
        <v-icon
          style="background-color:black;color:white;padding:14px; border-radius:50%; margin:15px;">mdi-logout-variant</v-icon>Logout
      </div>

    </v-col>


    <v-col cols="12" lg="4" md="6" sm="12">

      <div class="d-flex my-4">
        <div class="text-start">
          <h1>Todays Plan</h1>
          <p class="font-weight-thin">Dec 14th 2022</p>
        </div>
        <div class="ml125">
          <v-icon class="add_icon">mdi-account-multiple-plus-outline</v-icon>
        </div>
      </div>

      <div>
        <h2>Sustainable development goals and health innovation</h2>
      </div>

      <div class="box">
        <h2>Weekly Report</h2>
        <p>Track Your Performance</p>
        <v-btn elevation="2" class="my-5">View Report</v-btn>
      </div>

      <v-row>
        <v-col>
          <div class="box">
            <h2>Weekly Report</h2>
            <p>Track Your Performance</p>
            <v-btn elevation="2" class="my-5">View Report</v-btn>
          </div>
        </v-col>
        <v-col>
          <div class="box">
            <h2>Weekly Report</h2>
            <p>Track Your Performance</p>
            <v-btn elevation="2" class="my-5">View Report</v-btn>
          </div>
        </v-col>
      </v-row>


    </v-col>


    <v-col cols="12" lg="4" md="6" sm="12" class="backcol py-8">

      <div class="d-flex">
        <h3>Monthly Pinned</h3>
        <p class="small">View all</p>
      </div>

      <div class="reportbox  my-2">
        <p class="m-0">Next-gen immuno</p>
        <p class="float-end seen">6h</p>
        <h3>Multispecific liquids analysis</h3>
        <div class="my-4">
          <p class="badge" style="background-color:#F1DCC4">1</p> <span>New Feedback</span>
        </div>
      </div>

      <div class="reportbox my-2">
        <p class="m-0">Harmony</p>
        <p class="float-end seen">1h</p>
        <h3>Protein characterization during childhood and maturity</h3>
        <div class="my-4">
          <p class="badge" style="background-color:black; color:white">1</p> <span>Deadline is today</span>
        </div>
      </div>

      <div class="reportbox my-2">
        <p class="m-0">Pharmacuticals</p>
        <p class="float-end seen">4h</p>
        <h3>Quick Element dissolution testing </h3>
        <div class="my-4">
          <p class="badge" style="background-color:#A2BCC1; color:white">1</p> <span>Accepted</span>
        </div>
      </div>

      <div class="my-14">
        <h3>My Learnings</h3>
        <p>Your Progress of medical lectures</p>

        <v-row>
          <v-col cols="12" lg="6">

            <div class="d-flex">
              <v-icon class="virus" style="background-color:#EBEAE9">mdi-pitchfork</v-icon>
              <div class="ml-4">
                <h3 class="m-0">Virus</h3>
                <p>96% Progress</p>
              </div>
            </div>

          </v-col>
          <v-col cols="12" lg="6">

            <div class="d-flex">
              <v-icon class="virus" style="background-color:#FDEDE5">mdi-pitchfork</v-icon>
              <div class="ml-4">
                <h3 class="m-0">Bacterial cells</h3>
                <p>33% Progress</p>
              </div>
            </div>

          </v-col>
          <v-col cols="12" lg="6">

            <div class="d-flex">
              <v-icon class="virus" style="background-color:#F7EBEB">mdi-pitchfork</v-icon>
              <div class="ml-4">
                <h3 class="m-0">Med Science</h3>
                <p>7% Progress</p>
              </div>
            </div>

          </v-col>
          <v-col cols="12" lg="6">

            <div class="d-flex">
              <v-icon class="virus" style="background-color:#EBEAE9">mdi-pitchfork</v-icon>
              <div class="ml-4">
                <h3 class="m-0">Human gens</h3>
                <p>85% Progress</p>
              </div>
            </div>

          </v-col>
        </v-row>
      </div>

    </v-col>

    <v-col cols="12" lg="2" md="6" sm="12" class="backcol" style="border-left:2px solid #F0ECE9">

      <div class="py-5 text-center">
        <v-badge bordered bottom color="deep-purple accent-4" dot offset-x="10" offset-y="10">
          <v-avatar size="70">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>
        <h3 class="mt-3">Dr. Riddle</h3>
        <p>Scientist</p>
      </div>

      <div class="logout" style="margin-left:60px">
        <v-icon style="font-size:35px;">mdi-fountain-pen-tip</v-icon>
        <br />
        <v-icon style="font-size:35px;">mdi-message-processing-outline
        </v-icon>

        <p style="font-size:35px;background-color:black;color:white;padding:9px 24px;border-radius:50%">+</p>
      </div>

    </v-col>

  </v-row>



</template>

<script>
export default {

  name: 'HelloWorld',

  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}

</script>

<style>
/* .mdi::before {
    display: none !important;
} */
.v-expansion-panel-header>*:not(.v-expansion-panel-header__icon) {
  flex: 0;
}

.virus {
  font-size: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.mdi-chevron-down::before {
  content: "";
}

.badge {
  background-color: blue;
  float: left;
  padding: 0px 8px 0px 8px;
  border-radius: 50%;

}

.v-expansion-panel::before {
  box-shadow: none;
}

.backcol {
  background-color: #FBF7F4 !important;
}

.seen {
  color: grey;
  margin-top: -35px;
}

.add_icon {
  background-color: black;
  color: white !important;
  padding: 15px;
  border-radius: 50%;
}

.reportbox {
  border: 1px solid #EBE6E5;
  padding: 15px;
}

.box {
  border: 1px solid black;
  height: 200px;
  margin-top: 25px;
  padding: 20px;
}

.logout {
  position: fixed;
  text-align: center;
  bottom: 0px;
}

.small {
  margin-left: 230px;
}

.ml125 {
  margin-left: 195px !important;
}
</style>