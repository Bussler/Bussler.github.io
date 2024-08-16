<script setup lang="ts">
import { onMounted } from 'vue'
import { useToolbarStore } from '@/stores/useToolbarStore'
import Linker from '@/components/common/Linker.vue'

const titlebar = useToolbarStore()

onMounted(async () => {
  titlebar.clearToolbarComponents()
})
</script>

<template>
  <Card>
    <template #title>Paper</template>
    <template #content>
      <span>On this site you can find some papers that I wrote during my studies at the TUM.</span>

      <div class="extended-space"></div>

      <Accordion :multiple="true">
        <!-- <AccordionInfoLinkTab
          reference="/pdfs/CVMaartenBussler.pdf"
          text="Curriculum Vitae Maarten Bussler"
          icon="pi pi-paperclip"
          description="Loool"
        /> -->
        <AccordionTab>
          <template #header>
            <Linker
              text="Master Thesis: Training Methods for Memory-efficient Volume Scene Representation Networks"
              reference="/pdfs/Master_Thesis_Training_Methods_for_Memory_efficient_Volume_Scene_Representation_Networks_Maarten_Bussler.pdf"
              icon="null"
            />
          </template>
          <p class="m-0">
            Despite extensive research in the field of scientific data compression, modern
            visualization tasks encounter the obstacle of managing both memory and network
            bottlenecks when visualizing scientific data of high resolution at a smooth and
            responsive visual feedback rate. Motivated by ever increasing data sizes, techniques to
            efficiently compress and decompress scientific data are much in demand. Recently,
            compression methods that utilize neural networks have gained considerable attention in
            the visual computing research community. These scene representation networks (SRN),
            represent encoded data implicitly as a learned function and possess strong compressive
            capabilities by limiting the complexity of the encoding network. This thesis proposes to
            increase the compressiveness of learned data representations by using pruning algorithms
            in combination with neural networks, thereby enabling the network to learn the best
            tradeoff between network size and reconstruction quality during training. Furthermore,
            frequency encoding of a networks feature space is proposed to enhance the pruning
            capabilities of dropout methods and further improve the compression quality of SRN.
          </p>
          <div class="extended-space"></div>
          <Linker
            text="Master Thesis: Training Methods for Memory-efficient Volume Scene Representation Networks"
            reference="/pdfs/Master_Thesis_Training_Methods_for_Memory_efficient_Volume_Scene_Representation_Networks_Maarten_Bussler.pdf"
            icon="pi pi-paperclip"
          />
        </AccordionTab>

        <AccordionTab>
          <template #header>
            <Linker
              text="Investigating realtime capabilities of DSNeRF"
              reference="/pdfs/3D_Machine_Learning_DSNERF_Project_Final_Report.pdf"
              icon="null"
            />
          </template>
          <p class="m-0">
            Depth-supervised NeRF (DSNeRF) is a state of the art deep neural network method for
            implicit 3D scenes representation from multi-view inputs. Recent research has show that
            passing input points through high-frequency functions before feeding the data to the
            network enables the network to accurately depict high-frequency regions of a scene. We
            investigate the performance of different such embeddings on the quality of the final
            output. Specifically, we analyse gaussian fourier feature mappings, and approaches that
            leverage periodic activation functions like SIREN and SINONE. Furthermore, we want to
            examine the possibility to enhance DSNeRFs real time capabilities by implementing the
            concepts of FastNeRF. We achieve a GPU accelerated realtime interactive implementation.
            The overall goal is to produce a DSNeRF based application that is more applicable to
            real world use by trying to get closer to realtime rendering performance, achieving
            higher quality reconstruction of difficult scenes and needing less viewpoints.
          </p>
          <div class="extended-space"></div>
          <Linker
            text="Investigating realtime capabilities of DSNeRF"
            reference="/pdfs/3D_Machine_Learning_DSNERF_Project_Final_Report.pdf"
            icon="pi pi-paperclip"
          />
        </AccordionTab>

        <AccordionTab>
          <template #header>
            <Linker
              text="Semantic Scene Analysis on Pointclouds: PointNet"
              reference="/pdfs/3D_Vision_Seminar_PointNet_Maarten_Bussler.pdf"
              icon="null"
            />
          </template>
          <p class="m-0">
            Efficient semantic segmentation and classification algorithms are an important aspect of
            computer vision. These algorithms work on 3D data and can perceive and interpret the
            surroundings of a scene, which is crucial to the fields of autonomous driving, virtual
            reality or indoor navigation. With modern advancements in sensor technology and
            computational power, it is today possible to apply deep learning techniques on these 3D
            data specific tasks. Point clouds is a versatile data format that is especially
            important for the field of autonomous driving. Because of their irregular structure,
            point clouds are notoriously hard to handle for neural networks and are thus often
            converted into regular and more voluminous representations like voxel grids. This,
            however, limits the size of the analyzable data and exposes the input data to
            quantization errors. This paper aims to give an overview of the PointNet architecture by
            Qi et. al., a highly versatile and efficient deep learning network that works directly
            on points clouds without the need of previous data format transformations and forms the
            basis for many modern state of the art algorithms on 3D data classification and segmen-
            tation. Furthermore, this paper discusses different areas of application for PointNet,
            but also limitations and advancements of the original PointNet architecture.
          </p>
          <div class="extended-space"></div>
          <Linker
            text="Semantic Scene Analysis on Pointclouds: PointNet"
            reference="/pdfs/3D_Vision_Seminar_PointNet_Maarten_Bussler.pdf"
            icon="pi pi-paperclip"
          />
        </AccordionTab>

        <AccordionTab>
          <template #header>
            <Linker
              text="Bachelor Thesis: Volume Data Compression"
              reference="/pdfs/Bachelor_Thesis_Volume_Data_Compression_Maarten_Bussler.pdf"
              icon="null"
            />
          </template>
          <p class="m-0">
            Despite extensive research in the field of volume data compression, modern volume
            visual- ization faces the challenge to handle both memory and network bottlenecks when
            visualizing high resolution volume data at a smooth visual feedback rate. Techniques to
            efficiently compress and decompress volume data are much in demand. TTHRESH by
            Ballester-Ripoll et al. tackles this problem by providing a lossy compression technique
            based on the HOSVD and adaptive thresholding of volume elements that offers high
            compression ratios at the cost of a comparably low approximation error. We hypothesize
            the possibility of improvement of the achieved compression ratio when incorporating
            known structures of the data, like the hot corner phenomenon, into the algorithm.
            Furthermore, we analyze the benefit of combining core truncation as another established
            compression technique with TTHRESH.
          </p>
          <div class="extended-space"></div>
          <Linker
            text="Bachelor Thesis: Volume Data Compression"
            reference="/pdfs/Bachelor_Thesis_Volume_Data_Compression_Maarten_Bussler.pdf"
            icon="pi pi-paperclip"
          />
        </AccordionTab>

        <AccordionTab>
          <template #header>
            <Linker
              text="Data Visulization: Direct Volume Rendering"
              reference="/pdfs/Seminar_Data_Visualization-Maarten-Bussler.pdf"
              icon="null"
            />
          </template>
          <p class="m-0">
            Direct-Volume-Rendering hat sich als eine effiziente Methode zur Darstellung und Analyse
            von volumetrischen Daten etabliert. Anwendungen in der Medizin (MRI, CT), Biotechnologie
            oder Flüssigkeitssimulation greifen auf Volumengrafiken zurück. Aus- giebige Forschung
            in diesem Bereich führte zur Entwicklung unterschiedlicher Renderingalgorithmen. Frühe
            Renderingmetho- den von Volumendaten umfassten approximative Darstellungen des Volumens
            durch geometrische Primitive. Moderne Volumen- daten sind jedoch zu umfangreich für
            diese Renderingmethode. Zudem wird häufig eine möglichst detailgetreue Abbildung des
            Volumens benötigt. Infolgedessen wurde die Renderingtechnik des Direct-Volume-Rendering
            entwickelt, die ein zweidimensio- nales Bild direkt aus den gesamten gegebenen
            dreidimensionalen Daten des Volumens extrahiert. Zusätzliche Datenstrukturen als
            Zwischenglied werden bei dieser Methode nicht mehr benötigt. Hohe Bildraten und ein
            flüssiges visuelles Feedback beim Rendern sind für das Verständnis der Volumendaten
            essentiell, doch eine umfangreiche Darstellung des Volumens bringt auch einen hohen
            Rechenaufwand mit sich. Entsprechend wurden speziell unter Einbeziehung der GPU eine
            Vielzahl an unterschied- lichen Optimierungsmöglichkeiten für den Renderingvorgang
            entwickelt.
          </p>
          <div class="extended-space"></div>
          <Linker
            text="Data Visulization: Direct Volume Rendering"
            reference="/pdfs/Seminar_Data_Visualization-Maarten-Bussler.pdf"
            icon="pi pi-paperclip"
          />
        </AccordionTab>

        <AccordionTab>
          <template #header>
            <Linker
              text="Video Games in Modern Culture"
              reference="/pdfs/Essay_Video_Games_in_Modern_Culture.pdf"
              icon="null"
            />
          </template>
          <p class="m-0">
            Video games are a popular free time activity and deeply rooted in our modern society. At
            the same time, video games have been the source for arguments between the media and
            scientific communities for several decades now. Especially violent video games have been
            thoroughly analyzed and discussed by media and scientists alike. This paper defends that
            many of the raised concerns are inconsistent and exaggerated, while positive effects of
            said games are overlooked. It is argued that video games are at risk to become a modern
            scapegoat, if the general debate on video games is not opened up to include both
            positive and negative aspects of video game play.
          </p>
          <div class="extended-space"></div>
          <Linker
            text="Video Games in Modern Culture"
            reference="/pdfs/Essay_Video_Games_in_Modern_Culture.pdf"
            icon="pi pi-paperclip"
          />
        </AccordionTab>
      </Accordion>
    </template>
  </Card>
</template>

<style scoped>
.extended-space {
  margin: 15px 0; /* Adjust the margin to extend the space */
}
</style>
