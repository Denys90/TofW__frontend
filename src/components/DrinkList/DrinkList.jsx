import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  DrinkButtonMinus,
  DrinkButtonPlus,
  DrinkListWrapper,
  DrinkListTitle,
  DrinkListItem,
  DrinkGlass,
  DrinkButtons,
  DrinkListAddWater,
  DrinkListUl,
  DrinkListRow,
} from './DrinkListStyled';

import svg from 'assets/images/icons.svg';
import Modal from 'components/Modal/Modal';

import { AddWaterModal } from 'components/AddWaterModal/AddWaterModal';
import { EditWaterModal } from 'components/AddWaterModal/EditWaterModal';
import { DeleteEntryModal } from './deleteEntryPopUp/DeleteEntry';

import useWater from 'hooks/useWaters';

export const DrinkList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [modalContent, setModalContent] = useState(null);

  const { createWater, reps } = useWater();
  // --------------------------------------------------------------
  const currentData = Date.now();
  const date = new Date(currentData);
  const stringDate = date.toLocaleDateString();
  // --------------------------------------------------------------

  useEffect(() => {
    createWater({ date: stringDate });
  }, [stringDate, createWater]);

  const openModalWithContent = (content, isOpen) => {
    setModalContent(content);
    setIsOpen(!isOpen);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DrinkListWrapper>
        <DrinkListTitle>Today</DrinkListTitle>
        <DrinkListUl>
          {reps.map((drink) => {
            const [hours, minutes] = drink.time.split(':').map(Number);

            const parsedHours = hours >= 12 ? hours - 12 : hours;
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const displayHours = parsedHours === 0 ? 12 : parsedHours;

            return (
              <DrinkListRow key={nanoid()}>
                <DrinkListItem>
                  <DrinkGlass>
                    <use href={`${svg}#icon-glass`}></use>
                  </DrinkGlass>
                  <h4>{drink.amount} ml</h4>
                  <p>
                    {displayHours}:{minutes < 10 ? '0' + minutes : minutes}{' '}
                    {ampm}
                  </p>
                </DrinkListItem>
                <DrinkButtons>
                  <DrinkButtonPlus
                    onClick={() =>
                      openModalWithContent(
                        <EditWaterModal id={drink._id} onClose={closeModal} />
                      )
                    }
                  >
                    <use href={`${svg}#icon-note`}></use>
                  </DrinkButtonPlus>
                  <DrinkButtonMinus
                    onClick={() =>
                      openModalWithContent(
                        <DeleteEntryModal
                          id={drink._id}
                          date={{ date: stringDate }}
                          onClose={closeModal}
                        />
                      )
                    }
                  >
                    <use href={`${svg}#icon-trash`}></use>
                  </DrinkButtonMinus>
                </DrinkButtons>
              </DrinkListRow>
            );
          })}
        </DrinkListUl>
        <DrinkListAddWater
          onClick={() =>
            openModalWithContent(<AddWaterModal onClose={closeModal} />)
          }
        >
          <svg>
            <use href={`${svg}#icon-increment`}></use>
          </svg>
          Add water
        </DrinkListAddWater>
      </DrinkListWrapper>

      {isOpen && <Modal onClose={toggleModal}>{modalContent}</Modal>}
    </>
  );
};
