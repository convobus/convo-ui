import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getDocs, collection } from "firebase/firestore"
import { Layout } from "antd"
import Dashboard from "./containers/Dashboard"
import { useEffect } from "react"

// const firebaseConfig = {
//   apiKey: "AIzaSyA12h1NS3TPB2BqwOds0v9_GYJlM8OpC48",
//   authDomain: "convobus.firebaseapp.com",
//   projectId: "convobus",
//   storageBucket: "convobus.appspot.com",
//   messagingSenderId: "1067562646321",
//   appId: "1:1067562646321:web:b59f94c94b5d9e560d8e10",
//   measurementId: "G-QMP8ZN16JK",
// }

function App() {
  // useEffect(() => {
  //   const app = initializeApp(firebaseConfig)
  //   const analytics = getAnalytics(app)
  //   const database = getFirestore(app)

  //   const collection_name = "test1"

  //   getDocs(collection(database, collection_name)).then((resp) =>
  //     console.log("####", JSON.parse(JSON.stringify(resp))),
  //   )
  // }, [])

  return (
    <Layout style={{ height: "100vh" }}>
      <Dashboard />
    </Layout>
  )
}

export default App
