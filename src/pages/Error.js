import {MainNavigation} from "../components/MainNavigation";

export const ErrorPage = () => {
    return <>
        <MainNavigation/>
        <main class="content">
            <hi>An error occurred!</hi>
            <p>Can't fetch this page!</p>
        </main>
    </>
}