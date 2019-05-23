import * as React from 'react';
import styled, { css } from 'styled-components';

import SectionHeader from './section/Header';
import { coderDojo } from '../images';
import { blogsArray } from '../util/data';
import { SectionObj } from '../util/interfaces';

interface Props {
	title?: string;
	icon?: string;
	text?: string | Array<string>;
	data?: SectionObj;
	isMobile?: boolean;
}

const ExperienceWrapper = styled.div`
	display: grid;
	grid-gap: 20px 20px;
	text-align: left;
`;

const ExperienceTitle = styled.div<Props>`
	grid-column: 1 / 3;
	grid-row: 1 / 1;

	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 1 / 2;
		`}
`;

const ExperienceContent = styled.div<Props>`
	grid-column: 1 / 3;
	grid-row: 2 / 4;

	${props =>
		props.isMobile &&
		css`
			grid-column: 1 / 1;
			grid-row: 3 / 4;
		`}
`;

const CoderDojoImg = styled.img`
	width: 75%;
	grid-column: 1 / 3;
	grid-row: 5 / 6;
	margin: auto;
`;

const ExperienceBlogs = styled.div`
	li {
		list-style: none;
		text-decoration: none;
		font-family: Josefin Slab;
		padding-top: 5px;
		a,
		a:active,
		a:hover,
		a:visited {
			color: #6a86fe;
		}
		a:active,
		a:hover {
			color: #b721ff;
		}
	}
`;

const Experience = (props: Props) => {
  const data: SectionObj = props.data
  const { title, icon, text } = data;
  const { isMobile } = props;
  
	return (
		<ExperienceWrapper>
			<ExperienceTitle isMobile={isMobile}>
				<SectionHeader title={title} icon={icon} />
			</ExperienceTitle>
			<ExperienceContent isMobile={isMobile}>
				{text.map((item: string, i: number) => (
					<p key={i}>{item}</p>
				))}
				<ExperienceBlogs>
					{blogsArray.map((item, i) => (
						<li key={i}>
							<a href={item.href}>{item.title}</a>
						</li>
					))}
				</ExperienceBlogs>
			</ExperienceContent>
			<CoderDojoImg src={coderDojo} alt="Me on stage" />
		</ExperienceWrapper>
	);
};

export default Experience;
