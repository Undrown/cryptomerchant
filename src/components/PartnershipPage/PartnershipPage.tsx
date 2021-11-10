import {Button, ButtonGroup} from '@mui/material';
import './PartnershipPage.css'
import {useEffect, useState} from "react";
import ReferalsPage from "./RefsPage";
import RewardPage from "./RewardPage";

const PartnershipPage = () => {
    const [activePage, setActivePage] = useState(1);

    const getContent = (activePage: number) => {
        switch (activePage) {
            case 0:
                return <RewardPage/>;
            case 1:
                return <ReferalsPage/>;
            default: {
                return 'Unknown state';
            }
        }
    }
    return (
        <div className={'partnershipPage'}>
            <div className={'header'}>
                Партнерская программа<br/>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    <Button className={activePage === 0 ? 'active' : ''} onClick={() => {
                        setActivePage(0)
                    }}>Партнёрские вознаграждения</Button>
                    <Button className={activePage === 1 ? 'active' : ''} onClick={() => {
                        setActivePage(1)
                    }}>Рефералы</Button>
                </ButtonGroup>
            </div>
            <div className={'content'}>
                {getContent(activePage)}
            </div>
        </div>
    );
}

export default PartnershipPage