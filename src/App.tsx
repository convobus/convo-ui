import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { Layout } from "antd"
import Dashboard from "./containers/Dashboard"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Dashboard2 from "./workspace/Dashboard"

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_rk0oC8SGz",
    userPoolWebClientId: "hk2tm51l5cri0gpgr77q02tjs",
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    [<Route path="/" element={<Dashboard />}/>,
    <Route path="/preview-hidden" element={<Dashboard2 />} />]
  )
)

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Layout style={{ height: "100vh" }}>
          {/* <h1>Hello {user?.username}</h1>
          <Button onClick={signOut}>Sign out</Button> */}
          {/* <Dashboard /> */}
          <RouterProvider router={router}/>
        </Layout>
      )}
    </Authenticator>
  )
}

export default App
