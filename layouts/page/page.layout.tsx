// Utils
import styled from "styled-components"

// Components
import Footer from "../../components/footer/footer.component"
import Header from "../../components/header/header.component"

// Types
export interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IProps> = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<main>
				{children}
				<Footer />
			</main>
		</LayoutContainer>
	)
}

export default PageLayout

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* height: auto; */
	overflow-x: hidden;
	overflow-x: clip !important;
	height: -webkit-fill-available;

	main {
		margin: 10rem 0 0;
		flex-grow: 1;
		/* height: auto; */
		height: -webkit-fill-available;
		overflow-x: hidden;
		overflow-x: clip !important;
	}
`
