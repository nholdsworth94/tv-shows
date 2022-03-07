import { useEffect, useState } from 'react';
import { TVMazeShow } from '../../models/tv-maze/show';
import { TVMazeShowList } from '../../models/tv-maze/show-list';
import AddShowList from './add-show-list/AddShowList';
import './add-show.css';

const AddShow = () => {

    const [searchStr, setSearchStr] = useState<string>('');
    const [items, setItems] = useState<TVMazeShow[]>([]);

    const search = () => {

        const res = fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
            .then((x) => x.json())
            .then((x: TVMazeShowList[]) => x.map(y => y.show))
            .then((x: TVMazeShow[]) => {
                setItems(x);
            });
    }

    useEffect(() => {

    }, [searchStr]);

    return (
        <div className="page full">
            <div className='header'>
                <h1 className='header'>
                    Add Show
                </h1>

                <div className='right'>
                    <input className='search' type="search" placeholder='Search...' value={searchStr} onInput={(e: any) => setSearchStr(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? search() : null} />

                    <button className='button' onClick={search}>Search</button>
                </div>
            </div>

            <AddShowList items={items} />
        </div>
    );
}

export default AddShow;