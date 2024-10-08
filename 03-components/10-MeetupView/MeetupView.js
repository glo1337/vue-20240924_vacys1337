import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupAgenda,
    MeetupDescription,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
    }
  },
  
  template: `
    <div>

      <!-- Обложка митапа -->
      <MeetupCover 
        :title="meetup.title"
        :image="meetup.image"
      />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
            <MeetupDescription
              :description="meetup.description"
            />

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <template v-if="meetup.agenda.length">
              <MeetupAgenda 
                :agenda="meetup.agenda"
              />
            </template>
            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo 
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            />
            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
