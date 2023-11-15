import React, {useMemo } from 'react';
import './KanbanBoard.css'
import TicketColumn from '../TicketColumn/TicketColumn';

const KanbanBoard = ({ gridData, grouping, userIdToData }) => {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => <TicketColumn key={k} tickets={gridData[k]} grouping={grouping} groupBy={k} userIdToData={userIdToData} />)}
        </div>
    );
}

export default KanbanBoard;
