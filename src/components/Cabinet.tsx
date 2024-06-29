import MaxWidthWrapper from './MaxWidthWrapper';
import Saidbar from './Sidebar';

type CabinetProps = {
	children: React.ReactNode;
};
export default function Cabinet({ children }: CabinetProps) {
	return (
		<MaxWidthWrapper className="flex py-16">
			<Saidbar />
			<div className="w-full h-full">
				{children}
			</div>
		</MaxWidthWrapper>
	)
}