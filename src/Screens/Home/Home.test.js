import React from 'react';
import { render, waitFor } from '@testing-library/react-native'
import { FlatList } from 'react-native';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockImplementation(() => {
    const restaurantes = [{ id: 1, name: "Restaurant 1" }]
    const loading = false
    return { restaurantes, loading }
  }),
  useDispatch: jest.fn().mockImplementation(() => jest.fn())
}));

describe('HomeScreen testes', () => {
  it("Renderizou os itens", async () => {
    const { getByTestId } = render(<FlatList />)
    waitFor(() => expect(getByTestId(/restaurante-1/)).toBeTruthy())
  }) 

})