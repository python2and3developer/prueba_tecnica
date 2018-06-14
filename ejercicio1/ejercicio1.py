# encoding: utf-8

import math

NUMERO_PERFECTO = 0
NUMERO_ABUNDANTE = 1
NUMERO_DEFECTIVO = 2


def listar_divisores(numero):
    """Dado un número proprocionar la lista de divisores

    :param numero: Número a encontra la lista de divisores
    :return: Lista de divisores del número
    """

    # El 1 siempre es un divisor.
    lista_de_divisores = [1]

    # El maximo divisor posible es la mitad del número
    for i in range(2, int(numero / 2.0) + 1):
        if numero % i == 0:
            lista_de_divisores.append(i)

    return lista_de_divisores


def analizar(numero):
    """Analizar si un número es perfecto, abundante o defectivo

    :param numero: Número a anailzar
    :return: Constante indicando si el número es perfecto, abundante,
             o defectivo.
    """

    lista_de_divisores = listar_divisores(numero)

    suma_de_divisores = sum(lista_de_divisores)

    if suma_de_divisores == numero:
        return NUMERO_PERFECTO
    elif suma_de_divisores > numero:
        return NUMERO_ABUNDANTE
    else:
        return NUMERO_DEFECTIVO
