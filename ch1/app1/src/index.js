import React from 'react'
import ReactDOM from 'react-dom'

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

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  return (
    <>
      <Part1 part1={props.course.parts[0]}/>
      <Part2 part2={props.course.parts[1]}/>
      <Part3 part3={props.course.parts[2]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}

const Part1 = (props) => {
  return (
    <p>
      {props.part1.name} {props.part1.exercises}
    </p>
  )
}

const Part2 = (props) => {
  return (
    <p>
      {props.part2.name} {props.part2.exercises}
    </p>
  )
}

const Part3 = (props) => {
  return (
    <p>
      {props.part3.name} {props.part3.exercises}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
