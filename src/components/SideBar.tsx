import React from 'react';
import { Button } from './Button';
import '../styles/sidebar.scss';
import { GenreResponseProps } from '../services/interface';

interface SideBarProps {
  genres:GenreResponseProps[];
  selectedGenredId:number;
  handleClick(id: number): void;
}

export function SideBar({genres,selectedGenredId,handleClick}:SideBarProps) {
  // Complete aqui
  return (<nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClick(genre.id)}
              selected={selectedGenredId === genre.id}
            />
          ))}
        </div>

      </nav>)
}