from typing import List
from abc import ABC, abstractmethod

import pkuseg


class WordSegmentationAlgorithm(ABC):
    @abstractmethod
    def seg(self, text: str) -> List[str]:
        pass


class WordSegmentation:
    def __init__(self, algorithm: WordSegmentationAlgorithm) -> None:
        self._algorithm = algorithm

    @property
    def algorithm(self):
        return self._algorithm

    @algorithm.setter
    def algorithm(self, algorithm: WordSegmentationAlgorithm) -> None:
        self._algorithm = algorithm

    def seg(self, text: str):
        return self._algorithm.seg(text)


class WordSegmentationAlgorithmPkuseg(WordSegmentationAlgorithm):
    def __init__(self):
        self._seg = pkuseg.pkuseg()

    def seg(self, text: str) -> List[str]:
        return self._seg.cut(text)
