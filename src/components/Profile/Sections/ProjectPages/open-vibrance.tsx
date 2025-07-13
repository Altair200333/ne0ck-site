import React from "react";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const OpenVibrancePost: React.FC = () => {
  return (
    <Stack>
      <Text fontSize="lg">
        Open Vibrance is a minimalistic overlay dictation app
      </Text>
      <Link
        href="https://github.com/Altair200333/open_vibrance"
        target="_blank"
        rel="noopener noreferrer"
        color="white"
        fontWeight="bold"
      >
        <FaGithub size={20} /> Check it out on Github
      </Link>
      <Box w="fit-content" alignItems="center">
        <Image
          src={"/assets/open-vibrance/logo.png"}
          alt="Coming soon illustration"
          height={100}
          width={100}
        />
      </Box>
      <Text>
        It looks like a small icon floating on your screen, that can be dragged
        by hovering it and grabbing handle that appears on the left.
      </Text>
      <Box w="fit-content" mx="auto" alignItems="center">
        <Image
          src={"/assets/open-vibrance/vibrance-indicator.png"}
          alt="Coming soon illustration"
          height={100}
          width={300}
        />
        <Text color="gray.300" mx="auto" w="fit-content">
          Possible indicator states
        </Text>
      </Box>
      <Text>
        Clicking on the blue reactangle itself opens menu with options to select
        provider, or set up hotkeys for recording. Nothing fancy here.
      </Text>
      <br />
      <Text>
        The juicy part is in the providers settings, where you can select{" "}
        <b>OpenAI</b>, <b>ElevenLabs</b> or <b>Custom</b> provider.
      </Text>
      <Text>
        In the OpenAI settings you need to paste your API key, and select the
        model (gpt-4o/mini or whisper), and configure prompt, i.e. by telling it
        to transcribe everything in specific language or correct spelling.
      </Text>
      <Box w="fit-content" mx="auto" alignItems="center">
        <Image
          src={"/assets/open-vibrance/vibrance-settings.png"}
          alt="Coming soon illustration"
          height={100}
          width={300}
        />
        <Text color="gray.300" mx="auto" w="fit-content">
          Possible indicator states
        </Text>
      </Box>
      <Text>
        In the <b>ElevenLabs</b> settings it is almost the same stuff, but
        without prompt this time, just model selection.
      </Text>
      <Text>
        And finally the last one, the <b>Custom</b> provider. Here you can write
        any <b>python code</b> to be executed by your system interpreter when
        audio is transcribed. Allowing it to be integrated with ANYTHING, so
        even when new AI models come out, you will not have to rebuild the app.
      </Text>
      <Text>
        The way it works is pretty simple, it just takes your script, writes it
        to tmp file, pastes <b>base64</b> audio as global constant (tried
        different ways, but this one worked the best), and runs it. Result
        should be printed to console, so that app can read transcription from
        std out.
      </Text>
      <br />
      <Text>
        I personally like OpenAI with gpt-4o model, it is very accurate across
        languages even if you mix them in the speech, and at the same time
        ignores speech imperfections if prompted to do so.
      </Text>
      <Text>
        ElevenLabs is nice, but too literal, it captures all stumbles and pauses
        way to well xD Which is not the best thing, when you want to prompt an
        agent or write a message
      </Text>
      <br />
      <br />
      <Text>
        How this idea came to mind and code? Recently i was searching for an app
        for dictation, and came across couple of solutions, one of them was{" "}
        <Link
          href="https://wisprflow.ai/"
          target="_blank"
          rel="noopener noreferrer"
          color="white"
          fontWeight="bold"
        >
          Whispr Flow
        </Link>
        .
      </Text>
      <br />
      <Text>
        {`To be honest, it worked pretty well (compared to other solutions), but of course it had
        limits behind paywall (pretty generous, must admit). And sometimes it acted as "LLM", by executing
        things instead of transcribing them, which is pretty annoying. And it just 
        happened to be that i had "free" OpenAI and ElevenLabs API keys, which made me build something for myself over a few weekends.`}
      </Text>
      <Text>
        The technology of choise became <b>Flutter</b> to keep platform agnostic
        and accesible to everyone, but uhhhh... Little did i know that this
        would not help to much in some aspects and became a bottleneck for some
        desired improvements.
      </Text>
      <Text>
        The goad was to relily only on existing flutter packages, only those
        that are crossplatform. I was lucky enough that there was a package for
        overlay window management and global (system level) hotkey handling
      </Text>
      <Text>
        Both packages work well (thanks to their devs), but appear to be limited
        in rather unexpected ways. For example in window management package
        there is no way to make click transparent in certain areas, and make
        hitbox smaller then certain size.
      </Text>
      <Text>
        And in hotkey handling package there was no way to capture key-up events
        (justification was that there in no such even in win-api), which forced
        me to implement hacky solution
      </Text>
      <br />
      <Text>
        This was developed and tested on <b>Windows</b>, although it should work
        on <b>Mac</b> and probably even <b>Linux</b>, i have not gotten a chance
        to test it on other platforms, so feedback and contributions are
        welcome.
      </Text>
    </Stack>
  );
};

export default OpenVibrancePost;
