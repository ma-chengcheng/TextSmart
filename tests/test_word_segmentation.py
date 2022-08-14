import pytest
from TextSmart.WS.word_segmentation import WordSegmentation, WordSegmentationAlgorithmPkuseg


class TestWordSegmentation:
    def test_word_segmentation_algorithm_pkuseg(self):
        ws = WordSegmentation(WordSegmentationAlgorithmPkuseg())
        assert ws.seg('好好学习，天天向上！') == ['好好', '学习', '，', '天天', '向上', '！']
