import React from 'react'
import ReactDOM from 'react-dom'


const Header = (param) => {
  console.log(param)
  return (
    <div>
      <h1> {param.name} </h1>
    </div>
  )
}

const Content = (param) => {
  console.log(param)
  return (
    <div>
      <p> {param.cont.name}, count {param.cont.exercises}</p>
    </div>
  )
}

const Total = (count) => {
  return (
    <div>
    <h2> Number of exercises {count.count}</h2>
  </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
console.log(course)

 // Content (param= part1)

  return (
    <div>
      <Header name = {course.name} />
      <Content cont = {course.parts[0]} />
      <Content cont = {course.parts[1]} />
      <Content cont = {course.parts[2]} />
      <Total  count = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))