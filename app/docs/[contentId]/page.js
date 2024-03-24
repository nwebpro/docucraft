import ContentDisplay from '@/components/ContentDisplay';

const SubContentPage = ({ params: { contentId } }) => {
	return <ContentDisplay id={contentId} />;
};

export default SubContentPage;
