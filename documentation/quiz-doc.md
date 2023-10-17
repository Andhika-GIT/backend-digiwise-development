# Quiz Documentation

## Create level question quiz

- membuat pertanyaan berdasarkan level
- level, title, option
- pilihan jawaban (a, b, c, d)

1. Collection
   - question
   - answer

### POST QUESTION

Endpoint : POST /quiz/question

Headers :

- Authorization : token

Request Body :

```json
{
  "level": 1,
  "question": "apa yang dimaksud dengan ...?",
  "option": {
    "a": "a. jawaban 1",
    "b": "b. jawaban 2",
    "c": "c. jawaban 3",
    "d": "d. jawaban 4"
  },
  "real_answer": "c",
  "question_type": "multiple choice"
}
```

Response Body Success :

```json
{
  "data": {
    "_id": "objectID",
    "level": 1,
    "question": "apa yang dimaksud dengan ...?",
    "option": {
      "a": "a. jawaban 1",
      "b": "b. jawaban 2",
      "c": "c. jawaban 3",
      "d": "d. jawaban 4"
    },
    "real_answer": "c",
    "question_type": "multiple choice"
  }
}
```

Response Body Error :

```json
"errors" : "failed to add question quiz"
```

### GET ALL QUESTION

Endpoint : GET /quiz/question

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": [
    {
      "_id": "objectID",
      "level": 1,
      "question": "apa yang dimaksud dengan ...?",
      "option": {
        "a": "a. jawaban 1",
        "b": "b. jawaban 2",
        "c": "c. jawaban 3",
        "d": "d. jawaban 4"
      },
      "real_answer": "c",
      "question_type": "multiple choice"
    },
    {
      "_id": "objectID",
      "level": 2,
      "question": "apa yang dimaksud dengan ...?",
      "option": {
        "a": "a. jawaban 1",
        "b": "b. jawaban 2",
        "c": "c. jawaban 3",
        "d": "d. jawaban 4"
      },
      "real_answer": "c",
      "question_type": "multiple choice"
    }
  ]
}
```

Response Body Error :

```json
"errors" : "cannot get all data question quiz"
```

### GET QUESTION BY ID

Endpoint : GET /quiz/question/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "_id": "objectID",
    "level": 1,
    "question": "apa yang dimaksud dengan ...?",
    "option": {
      "a": "a. jawaban 1",
      "b": "b. jawaban 2",
      "c": "c. jawaban 3",
      "d": "d. jawaban 4"
    },
    "real_answer": "c",
    "question_type": "multiple choice"
  }
}
```

Response Body Error :

```json
"errors" : "failed to get data question quiz by id"
```

### POST ANSWER KEY

Endpoint : POST /quiz/answer

Headers :

- Authorization : token

Request Body :

```json
{
  "id_level": "objectID",
  "id_question": "objectID",
  "option": "a. jawaban 1"
}
```

Response Body Success :

```json
{
  "data": {
    "_id": "objectID",
    "id_level": "objectID",
    "id_question": "objectID",
    "option": "a. jawaban 1"
  }
}
```

Response Body Error :

```json
"errors" : "failed to add answer key"
```

- pilih salah satu jawaban

## Create answer

- menyimpan jawaban user
- di cocokkan dengan jawaban yang ada di database
