import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query { 
    lessons { 
      id
      title
    }
  }
`;

interface lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map((lesson: lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
