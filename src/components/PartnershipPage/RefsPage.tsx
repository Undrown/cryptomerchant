import './RefsPage.css'
import {Button, TextField} from "@mui/material";
import btn from './copyButton.svg'

const RefsPage = () => {
    return (
        <div>
            <div>Вы можете участвовать в нашей партнерской программе. Используйте личную ссылку ниже.</div>
            <div className={'header2'}>Ваша партнерская ссылка</div>
            <div className={'mylink'}>
                <TextField variant="outlined" value={'https://www.cryptomercgant.com/ref/gmwefrgolrr69'}/>
                <Button value={'Copy to clipboard'} style={{marginTop: 10}}><img src={btn} alt="copy"/></Button>
            </div>
        </div>
    );
}
export default RefsPage