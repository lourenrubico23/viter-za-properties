import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RoutesDeveloper } from "./routes/RoutesDeveloper";
import PageNotFound from "./components/partials/PageNotFound";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="*" element={<PageNotFound />} />

              {/* <Route path={`${devNavUrl}/login`} element={<OtherUserLogin />} />
              <Route path={`${devNavUrl}/`} element={<Home />} />
              <Route path={`/`} element={<Home />} />
              <Route
                path={`${devNavUrl}/create-password`}
                element={<UserCreatePassword />}
              />
              <Route
                path={`${devNavUrl}/forgot-password`}
                element={<UserForgotPassword />}
              />
              <Route
                path={`${devNavUrl}/verify-email`}
                element={<UserVerifyEmail />}
              /> */}

              {/* {RoutesDeveloper.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })} */}
              {RoutesDeveloper.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
