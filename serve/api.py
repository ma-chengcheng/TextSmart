import time

import ray
from ray import serve
from TextSmart.WS.word_segmentation import WordSegmentation, WordSegmentationAlgorithmPkuseg


@serve.deployment(route_prefix='/word_segmentation')
class WordSegmentation:
    def __init__(self):
        # self.word_segmentation = WordSegmentation(WordSegmentationAlgorithmPkuseg())
        pass

    async def __call__(self, request):
        # TODO: 分句后再进行分词。
        # data = await request.body()
        return {'word': 'hello'}


if __name__ == '__main__':
    if ray.is_initialized():
        ray.shutdown()
    ray.init()
    serve.start()
    WordSegmentation.deploy()

    while True:
        time.sleep(5)
