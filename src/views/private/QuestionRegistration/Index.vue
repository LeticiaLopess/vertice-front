<template>
  <div class="bg-neutral-100/50 h-full p-4">
    <h1 class="text-2xl font-bold mb-6">Cadastrar Questão</h1>
    <main>
        <form @submit.prevent="submitForm">

        <Select
          v-model="form.subject_id"
          :options="subjects?.map(subject => ({ value: subject.id, label: subject.name }))"
          placeholder="Selecione uma matéria"
          allow-add
          endpoint="/api/subjects"
          @addOption="handleNewSubject"
          class="mb-4"
        />

        <Select
          v-if="form.subject_id"
          v-model="form.topic_id"
          :options="topics.map(topic => ({ value: topic.id, label: topic.name }))"
          placeholder="Selecione um tópico"
          allow-add
          endpoint="/api/topics"
          @addOption="handleNewTopic"
          class="mb-4"
        />

        <Select
          v-if="form.topic_id && subtopics.length > 0"
          v-model="form.subtopic_id"
          :options="subtopics.map(subtopic => ({ value: subtopic.id, label: subtopic.name }))"
          placeholder="Selecione um subtópico"
          allow-add
          endpoint="/api/topics"
          @addOption="handleNewSubtopic"
          class="mb-4"
        />

        <Input
          v-model="form.question"
          placeholder="Digite a pergunta"
          class="mb-4"
        />
        <Input
          v-model="form.answer_a"
          placeholder="Resposta A"
          class="mb-4"
        />
        <Input
          v-model="form.answer_b"
          placeholder="Resposta B"
          class="mb-4"
        />
        <Input
          v-model="form.answer_c"
          placeholder="Resposta C"
          class="mb-4"
        />
        <Input
          v-model="form.answer_d"
          placeholder="Resposta D"
          class="mb-4"
        />
        <Input
          v-model="form.answer_e"
          placeholder="Resposta E"
          class="mb-4"
        />

        <Select
          v-model="form.correct_answer"
          :options="[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'c', label: 'C' },
            { value: 'd', label: 'D' },
            { value: 'e', label: 'E' },
          ]"
          placeholder="Selecione a resposta correta"
          class="mb-4"
        />

        <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Salvar</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Select from '../../../components/Select/CustomizableSelect.vue'
import Input from '../../../components/Input.vue'

const form = ref({
  subject_id: '',
  topic_id: '',
  subtopic_id: '',
  question: '',
  answer_a: '',
  answer_b: '',
  answer_c: '',
  answer_d: '',
  answer_e: '',
  correct_answer: 'a',
})

const subjects = ref([])
const topics = ref([])
const subtopics = ref([])

onMounted(async () => {
  await loadSubjects()
})

const loadSubjects = async () => {
  try {
    const response = await axios.get('/subjects');
    subjects.value = response.data.dados;

  } catch (error) {
    console.error('Erro ao carregar matérias:', error);
  }
};

const loadTopics = async (subjectId) => {
  try {
    const response = await axios.get(`/subjects/${subjectId}/topics`);
    topics.value = response.data.dados;

  } catch (error) {
    console.error(`Erro ao carregar tópicos do assunto ${subjectId}:`, error);
  }
};

const loadSubtopics = async (topicId) => {
  try {
    const response = await axios.get(`/topics/${topicId}/children`);
    subtopics.value = response.data.dados;

  } catch (error) {
    console.error(`Erro ao carregar subtópicos do tópico ${topicId}:`, error);
  }
};

const handleNewSubject = async (newSubject) => {
  try {
    subjects.value.push(newSubject);
    form.value.subject_id = newSubject.id;

  } catch (error) {
    console.error('Erro ao adicionar novo assunto:', error);
  }
};

const handleNewTopic = async (newTopic) => {
  try {
    topics.value.push(newTopic);
    form.value.topic_id = newTopic.id;
    await loadSubtopics(newTopic.id);

  } catch (error) {
    console.error('Erro ao adicionar novo tópico:', error);
  }
};

const handleNewSubtopic = async (newSubtopic) => {
  try {
    subtopics.value.push(newSubtopic);
    form.value.subtopic_id = newSubtopic.id;

  } catch (error) {
    console.error('Erro ao adicionar novo subtópico:', error);
  }
};

const submitForm = async () => {
  try {
    const data = {
      ...form.value,
      topic_id: form.value.subtopic_id || form.value.topic_id,
    }

    await axios.post('/questions', data)
    resetForm()

  } catch (error) {
    console.log('Erro ao cadastrar questão.')
  }
}

const resetForm = () => {
  form.value = {
    subject_id: '',
    topic_id: '',
    subtopic_id: '',
    question: '',
    answer_a: '',
    answer_b: '',
    answer_c: '',
    answer_d: '',
    answer_e: '',
    correct_answer: 'a',
  }
  topics.value = []
  subtopics.value = []
}
</script>
