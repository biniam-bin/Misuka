import React from 'react'
import Card from '../common/Card'
import { CardsContainer, FavoriteContainer, FavoritesText } from './styles'

function FavoritesPage() {
    return (
        <FavoriteContainer>
            <FavoritesText>
                My Favorites

            
            </FavoritesText>
            <CardsContainer>
                <Card favorite/>
                <Card favorite/>
                <Card favorite/>
                <Card favorite/>
                <Card favorite/>
                <Card favorite/>
                <Card favorite/>
                <Card favorite/>
            </CardsContainer>
      </FavoriteContainer>
  )
}

export default FavoritesPage