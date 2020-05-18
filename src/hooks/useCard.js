import { useContext } from 'react';

import { CardContext } from '~/context/card';

const useCard = () => {
	const contextValue = useContext(CardContext);
	return contextValue;
};

export default useCard;
