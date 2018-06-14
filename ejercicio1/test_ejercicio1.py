import unittest

from ejercicio1 import (
    listar_divisores,
    analizar,
    NUMERO_PERFECTO,
    NUMERO_ABUNDANTE,
    NUMERO_DEFECTIVO)


class ListarDivisoresTestCase(unittest.TestCase):
    """Tests para funcion listar_divisores"""

    def test_divisores_de_6(self):
        self.assertEqual(listar_divisores(6), [1, 2, 3])

    def test_divisores_de_22(self):
        self.assertEqual(listar_divisores(22), [1, 2, 11])

    def test_divisores_de_496(self):
        self.assertEqual(listar_divisores(496), [1, 2, 4, 8, 16, 31, 62,
                         124, 248])

    def test_divisores_de_24(self):
        self.assertEqual(listar_divisores(24), [1, 2, 3, 4, 6, 8, 12])


class AnalizarTestCase(unittest.TestCase):
    def test_analizar_6(self):
        self.assertEqual(analizar(6), NUMERO_PERFECTO)

    def test_analizar_22(self):
        self.assertEqual(analizar(22), NUMERO_DEFECTIVO)

    def test_analizar_496(self):
        self.assertEqual(analizar(496), NUMERO_PERFECTO)

    def test_analizar_24(self):
        self.assertEqual(analizar(24), NUMERO_ABUNDANTE)


if __name__ == '__main__':
    unittest.main()
