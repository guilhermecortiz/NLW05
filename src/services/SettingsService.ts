import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepositories";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}


class SettingsService {
  async create({chat, username} : ISettingsCreate) {
  
    const settingsRepository = getCustomRepository(SettingsRepository);

    const userAlredyExists = await settingsRepository.findOne({ where: username });
 
    const settings = settingsRepository.create({
      chat,
      username
    });
 
    await settingsRepository.save(settings);
    
    return settings;
  }

}

export { SettingsService }