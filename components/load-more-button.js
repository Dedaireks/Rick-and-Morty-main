import {useContext} from "react";
import {LocationsContext} from "../store";

export const LoadMoreButton = () => {
    const {info, setPage} = useContext(LocationsContext);

    if (!info?.next) {
        return null
    }

    return (
        <button
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 16px',
                gap: '10px',
                width: '154px',
                height: '36px',
                background: '#F2F9FE',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14)',
                borderRadius: '4px',
            }}
            onClick={() => setPage(prev => ++prev)}
        >
            Load More
        </button>
    );
};
